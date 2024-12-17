import { MenuProvider } from './MenuContext';

export * from './MenuContext';

export default function StateProvider(props) {
    return (
        <MenuProvider>
            {props.children}
        </MenuProvider>
    )
}