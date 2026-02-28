import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


function ProtectedRoutes({children,requiredRole }) {

    const {isAuthentication,user,users} = useSelector((state)=>(state.userState))
   
    const findUser = users.find((item)=>(
      item.email === user.email
    ))
   
    
   
    if (!isAuthentication) {
        return <Navigate to={"/"}/>
    }
    
     if (requiredRole && !requiredRole.includes(findUser?.role)) {
      return <Navigate to="/unAuthorized" />
    } 



  return (
   <>
   
   {children}
   </>
    
 
);
}
export default ProtectedRoutes;