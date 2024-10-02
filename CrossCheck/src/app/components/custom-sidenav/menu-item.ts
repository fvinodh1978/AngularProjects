export interface MenuItem {
    icon: string;
    label: string;
    route?: string;
    disabled?: boolean;
    children?: MenuItem[];
}