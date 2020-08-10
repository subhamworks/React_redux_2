import React from 'react'
import { connect } from "react-redux";
import { CardContent, Grid, Typography, ButtonGroup } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from "./Cart.module.css"
import { Container, Row, Col } from "react-bootstrap"
import cartImage from "../../Assets/Images/cart_is_empty.png"
import itemRemoveImage from "../../Assets/Images/return-purchase.png"
import { QtyAddSuccess, QtyRemoveSuccess,CartItemRemoveSuccess } from '../../Redux/Action/ProductAction';

   
const Cart=(props)=> {
    const { ProductData: { ProductItem:{AddToCart,total} } } = props
console.log(AddToCart);
console.log(total);
const ProductDisplay = AddToCart.map((item) => {
    return (
   

        <Grid key={item._id}>
            <Grid >
                <CardContent >
                    <Row className={styles.mainRow}>
                        <Col className={styles.allColImg}>
                            <img src={'http://localhost:2000' + item.Image} alt="imag" width="250px" height="150px" />
                        </Col>
                        <Col className={styles.allColName}>
                            <Typography varaint="h5" >{item.Product_Name}  </Typography>
                        </Col>
                        <Col className={styles.allCol}>
                            {item.TotalQty}
                        </Col>
                        <Col className={styles.allCol}>
                            <ButtonGroup >
                                <button
                                className={styles.addRemoveButton}
                                    disabled={item.TotalQty === 1}
                                    aria-label="reduce"
                                    onClick={() => {
                                        props.itemRemove(item._id);

                                    }}
                                >
                                    <RemoveIcon fontSize="small" />
                                </button>
                                <button
                                    disabled={item.TotalQty===item.Product_Qty  }
                                    className={styles.addRemoveButton}
                                    aria-label="increase"
                                    onClick={() => {
                                        props.itemAdd(item._id);
                                    }}
                                >
                                    <AddIcon fontSize="small" />
                                </button>
                            </ButtonGroup>
                        </Col>
                        <Col className={styles.allCol}>
                            <Typography varaint="body2" >${item.TotalPrice}</Typography>
                        </Col>
                        <Col className={styles.allCol}>
                            <img src={itemRemoveImage} alt="imag" width="45px" height="50px" onClick={() => props.cartItemRemove(item._id)} />
                        </Col>
                    </Row>
                </CardContent>
            </Grid>
        </Grid>

    )
})
    return (
        <div>
             <Container>
              
                {total > 1 ?
                    <Row className={styles.container}>
                        <Row className={styles.rowItemDisplay}>
                            {ProductDisplay}
                        </Row>
                        <Row >
                            <Col className={styles.cartTotal}>
                                <Typography varaint="body2" >Total:${total}</Typography>
                            </Col>
                        </Row>
                    </Row>
                    :
                    <Row className={styles.cartEmpty}>
                        <img src={cartImage} alt="imag" width="500px" height="500px" />
                    </Row>
                }
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ProductData: state };

};
const mapDispatchToProps = dispatch => {
    return {
        itemAdd: (id) => dispatch(QtyAddSuccess(id)),
        itemRemove: (id) => dispatch(QtyRemoveSuccess(id)),
        cartItemRemove: (id) => dispatch(CartItemRemoveSuccess(id))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
