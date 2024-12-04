import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FileNode {
  name: string;
  type: string;
  children?: FileNode[];
}

const TREE_DATA: FileNode[] = [
  {
    name: 'src',
    type: 'directory',
    children: [
      { name: 'app', type: 'directory', children: [
        { name: 'file-explorer.component.ts', type: 'file' },
        { name: 'file-explorer.component.html', type: 'file' },
      ]},
      { name: 'assets', type: 'directory', children: [
        { name: 'logo.png', type: 'file' }
      ]},
      { name: 'index.html', type: 'file' },
    ]
  }
];

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {

  treeControl = new NestedTreeControl<FileNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FileNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
