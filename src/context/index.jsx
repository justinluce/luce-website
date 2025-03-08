import { MenuProvider } from './MenuContext';
import { ThemeProvider } from './ThemeContext';

export * from './MenuContext';
export * from './ThemeContext';

export default function StateProvider(props) {
    return (
        <MenuProvider>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </MenuProvider>
    )
}