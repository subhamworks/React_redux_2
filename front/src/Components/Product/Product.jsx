import React, { useEffect, useState } from 'react'
import styles from "./Product.module.css"
import { ProductPage } from "../../Redux/Action/ProductAction"
import { cartSuccess } from "../../Redux/Action/ProductAction"
import { connect } from "react-redux";
import { CardContent, Grid, Typography, CardActions } from '@material-ui/core'
import soldout from "../../Assets/Images/sold out.jpg"

const Product = (props) => {
    const [Productstate, setProductstate] = useState()
    useEffect(() => {
        props.ProductPage()
    }, [props.ProductPage])
    const { ProductData: { ProductItem:{ProductItem} } } = props
    useEffect(() => {
        setProductstate(ProductItem)
    }, [ProductItem])
    console.log(Productstate);
    return (
        <div >
            <div className={styles.main} >
                <div className={styles.row}>
                    {
                        Productstate && Productstate.length && Productstate.map((item) => {
                            return (
                                <div className={styles.column} key={item._id}>
                                    <div className={styles.content} >
                    {item.Product_Qty < 0 ? <img src={soldout} alt="Out Of stock" width="230px" height="150px" /> :

                                        <Grid  >
                                            <CardContent >
                                                <img src={'http://localhost:2000' + item.Image} alt="image" width="230px" height="150px" />
                                                <Typography varaint="h5" >{item.Product_Name}  </Typography>
                                                {/* <Typography varaint="h5" >Qty:{item.Product_Qty}  </Typography> */}
                                                <Typography varaint="body2" >${item.Product_Price}</Typography>
                                            </CardContent>
                                            <CardActions className={styles.addToCartButton} onClick={() => props.CartFun(item._id)}>
                                                Add To Cart
                                            </CardActions>
                                        </Grid>
                        }
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
        ProductPage: () => dispatch(ProductPage()),
        CartFun: (id) => dispatch(cartSuccess(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)