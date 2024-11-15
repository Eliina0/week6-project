import Sidebar from "./Sidebar"; 
import AppTitle from "./AppTitle"; 

const Layout = (props: any) => {
  return (
    <div>
      <AppTitle />
      <div style={{ display: 'flex' }}>
        <Sidebar />
          {props.children}
       
      </div>
    </div>
  );
}

export default Layout;
