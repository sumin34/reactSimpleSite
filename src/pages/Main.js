import { useDispatch, useSelector } from "react-redux";
import { getProductDB } from "../redux/productSlice";
import { useEffect } from "react";

function Main(){
    const productList = useSelector((state) => {
        return state.product.list;
    });

    const dispatch = useDispatch();

    useEffect(() => { //컴포넌트가 랜더링 될 때마다 특정작업을 실행할 수 있도록 하는 훅
        dispatch(getProductDB());
    },[]);

    return(
        <>
            {
                productList && productList.map((product,idx) => {
                    return(
                        <>
                            <h1>{product.name}</h1>
                            <h5>{product.price}</h5>
                        </>
                    );
                })
            }
        </>
    );
}
export default Main;