import Header from "./Header"

export default function Layout({children}){
    return (
        <div>
        <Header/>
        <div className="p-5">
            {children}
        </div>
        </div>
    )
}