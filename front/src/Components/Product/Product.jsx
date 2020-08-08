import React, { useEffect, useState } from 'react'
import styles from "./Product.module.css"
import { ProductPage } from "../../Redux/Action/ProductAction"
import { connect } from "react-redux";
const Product = (props) => {
    const [Productstate, setProductstate] = useState()
    useEffect(() => {
        props.ProductPage()
    }, [props.ProductPage])
    const { ProductData: { ProductItem } } = props
    useEffect(() => {
        setProductstate(ProductItem[0])
    }, [ProductItem[0]])
      return (
        <div >
            <div className={styles.main} >
                <div className={styles.row}>
                    {
                        Productstate && Productstate.length && Productstate.map((item) => {
                            return (
                                <div className={styles.column} key={item._id}>
                                    <div className={styles.content} >
                                        <img src="https://www.w3schools.com/w3images/mountains.jpg" alt="Mountains" width="100%" />
                                        <h3>{item.Product_Name}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return { ProductData: state };

};
const mapDispatchToProps = dispatch => {
    return {
        ProductPage: () => dispatch(ProductPage())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)