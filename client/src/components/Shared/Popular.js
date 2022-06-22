import React,{useContext,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { GlobalContext } from '../../context/GlobalState';

export default function Popular( )
{
    const { login,popularitem,popularretail,getPopularRetailers,getPopularItems } = useContext(GlobalContext);

    useEffect(()=>{
        getPopularItems();
        getPopularRetailers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Container fluid>
            <div className='pop-container'>
                <Row>
                    <div className="popular">
                        <h3 id='pop-items'>Popular Items</h3>
                        {
                            popularitem.map((item)=>{
                                return(
                                    <h4>{item.Item}</h4>
                                )
                            })
                        }
                    </div>

                </Row>
                <Row>
                    {!login? 
                    <div className="popular">
                        <h3 id='pop-retailers'>Popular Retailers</h3>
                        {
                            popularretail.map((retailer)=>{
                                return(
                                    <h4>{retailer.Name}</h4>
                                )
                            })
                        }
                    </div>: <></> }
                </Row>
            </div>
        </Container>
    )
}