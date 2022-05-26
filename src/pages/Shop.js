import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../utils/AuthFirebaseConfig";
import ItemList from "../components/ItemList"
import Filter from "../components/Filter";



const ProductsGrid = () => {

    const [products, setProducts]=useState([]);
    const {idCategory}=useParams();

    useEffect (()=> {
        const fetchFromFirestore = async (idCategory) =>{
            let hasCategory;
            if(idCategory) {
                hasCategory=query(collection(db, "products"), where ('category', "==", idCategory));
            }else {
                hasCategory=query(collection(db, "products"), orderBy ('name'));
            }
            const querySnapshot = await getDocs(hasCategory);
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        }


        fetchFromFirestore(idCategory)
        .then(result => setProducts(result))
        .catch (err => console.log(err))
    }, [idCategory])

    useEffect(() => {
        return (() => {
            setProducts([]);
        })
    }, []);




    return (
        <div className="pagebg">
        <Filter />
        <ItemList products={products}/>
        </div>
    )
}

export default ProductsGrid
