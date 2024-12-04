import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { FileItem } from '../../services/file/file.model';
import { FileExplorerService } from '../../services/file/file-explorer.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree'
import { AlertService } from '../../services/alert.service';
import { RestService } from '../../services/data/rest.service';
import { MatDialog } from '@angular/material/dialog';
import { SummaryComponent } from '../../dialogs/discovertests/summary/summary.component';
import { MatTableDataSource } from '@angular/material/table';

/*
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

// interface FoodNode {
//   name: string;
//   type: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'tests',
//     type: 'directory',
//     children: [
//       {
//         name: 'Fruit',
//         type: 'directory',
//         children: [
//           { name: 'Apple', type: 'file' },
//           { name: 'Banana', type: 'file' },
//           { name: 'Fruit', type: 'file' },
//           {
//             name: 'Nuts', type: 'directory',
//             children: [{ name: 'Badam', type: 'file' },
//             { name: 'Cashew', type: 'file' }]
//           }
//         ],
//       },
//       {
//         name: 'Vegetables',
//         type: 'directory',
//         children: [
//           {
//             name: 'Green',
//             type: 'directory',
//             children: [{ name: 'Broccoli', type: 'file' }, { name: 'Brussels', type: 'file' }],
//           },
//           {
//             name: 'Orange',
//             type: 'directory',
//             children: [{ name: 'Pumpkin Noodles', type: 'file' }, { name: 'Carrots Brussels', type: 'file' }],
//           },
//         ],
//       },
//       {
//         name: 'meat',
//         type: 'file'
//       }
//     ]
//   }
// ];

/**
 * @title Tree with flat nodes (childrenAccessor)
 */

@Component({
  selector: 'app-file-explorer1',
  templateUrl: './file-explorer1.component.html',
  styleUrl: './file-explorer1.component.css'
})
export class FileExplorer1Component {

  constructor(
    private fileExplorerService: FileExplorerService,
    private alertService: AlertService,
    private restService: RestService,
    public dialog: MatDialog,
  ) { }
  // dataSource = TREE_DATA;

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
  treeControl = new NestedTreeControl<FileItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileItem>();
  isLoading = false; // Loading flag for progress spinner

  currentPath = ''
  selectedFileName: string = 'Choose a Module';
  selectedNodePath!: string ;
  parentMap = new Map<FileItem, FileItem>(); // Map to store parent nodes

  childrenAccessor = (node: FileItem) => node.children ?? [];

  hasChild = (_: number, node: FileItem) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.loadFiles('/');
  }

  onCreateFolderClick(): void {
    console.log('Create folder button clicked!');
    // Add your logic here
  }

  onCreateFileClick(): void {
    console.log('Create file button clicked!');
    // Add your logic here
  }

  selectNode(node: FileItem): void {
    this.selectedNodePath = this.getFullPath(node);
    console.log('Selected node path:', this.selectedNodePath);
  }

  buildParentMap(nodes: FileItem[], parent: FileItem | null): void {
    nodes.forEach(node => {
      if (parent) {
        this.parentMap.set(node, parent);
      }
      if (node.children) {
        this.buildParentMap(node.children, node);
      }
    });
  }

  getFullPath(node: FileItem): string {
    const parent = this.parentMap.get(node);
    if (parent) {
      return `${this.getFullPath(parent)}/${node.name}`;
    } else {
      return node.name;
    }
  }


  onCheckboxChange(node: FileItem, event: any): void {
    if (node.type === 'file') {
      node.checked = event.checked;
      console.log(node.checked)
      this.selectedFileName = node.name;
      console.log('Selected File/Item:', this.selectedFileName);
    }
  }

  loadFiles(path: string): void {
    this.fileExplorerService.getFiles(path).subscribe(
      (data: FileItem[]) => {
        this.dataSource.data = data;
        this.buildParentMap(data, null)
        // this.treeControl.dataNodes = data;
      },
      error => console.error('Error loading files', error)
    );
  }

  discoverTests() {
    this.alertService.confirm(this.selectedNodePath);
    if (this.selectedFileName !== 'Choose a Module') {
      console.log('File name sent to backend:', this.selectedFileName);
      this.isLoading = true
      this.restService.discoverTests(this.selectedFileName).subscribe((response: any) => {
        console.log('API response:', response.length);

        let tableData = [
          { "module": "test_calculator", "count": 5, "suite": "Suite1" },
          { "module": "test_calculator", "count": 3, "suite": "Suite2" }
        ];
        console.log(tableData)
        this.isLoading = false;
        this.dialog.open(SummaryComponent, {
          width: '600px',
          data: { dataSource: tableData }
        });
      });
    } else {
      console.error('No file selected to send');
      this.alertService.confirm('Please Select a Module1');
    }
  }

  displayTest(record: any) {
    console.log(record);

    let tableData = Object.entries(record).map(([key, value]) => ({ key, value }));
    this.dialog.open(SummaryComponent, {
      width: '600px',
      // data: { dataSource: this.dataSource1 }
      data: { dataSource: tableData }
    });
  }
}
