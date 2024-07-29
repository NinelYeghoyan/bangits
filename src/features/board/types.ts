export type FormType = {
    id: string;
    title: string;
    description: string;
    date: string;
    status: 'pending' | 'completed' | 'overdue' | 'removed';
};

export interface BoardStateType {
    items: FormType[];
}
