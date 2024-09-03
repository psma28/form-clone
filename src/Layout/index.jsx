import "./index.css";
import { FormHeader } from '../components/FormHeader';

export function Layout({title, children}){
    return(
        <>
            <FormHeader 
                title={title}
            />
            <div className="container-fluid">
                {children}
            </div>
        </>
    )
};