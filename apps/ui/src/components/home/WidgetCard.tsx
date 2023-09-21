import { ReactNode } from 'react';

interface WidgetCardProps {
  children: ReactNode;
  title?: string;
}
export const WidgetCard = ({ children, title }: WidgetCardProps) => (
  <div className={'p-3 rounded-lg bg-gray-50 h-full flex flex-col gap-3'}>
    {title && <div className="tex t-sm font-medium">{title}</div>}
    {children}
  </div>
);

export default WidgetCard;
