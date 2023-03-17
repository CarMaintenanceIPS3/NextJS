import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactElement, ReactNode } from 'react';

interface AllProvidersProps {
    children: ReactNode;
}

const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
    return <UserProvider>{children}</UserProvider>;
};

const customRender = (
    ui: ReactElement,
    options: Omit<RenderOptions, 'wrapper'> = {}
) => {
    return rtlRender(ui, { wrapper: AllProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
