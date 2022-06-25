import React,{useContext,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { GlobalContext } from '../../context/GlobalState';

export default function Popular({darkMode})
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
                    <div className={darkMode ? 'popular dark-pop-items' : 'popular pop-items'}>
                        <h3>Popular Items</h3>
                        {
                            popularitem.map((item)=>{
                                return(
                                    <h4 className='popular-content'>{item.Item}</h4>
                                )
                            })
                        }
                    </div>

                </Row>
                <Row>
                    {!login? 
                    <div className={darkMode ? 'popular dark-pop-retailers' : 'popular pop-retailers'}>
                        <h3>Popular Retailers</h3>
                        {
                            popularretail.map((retailer)=>{
                                return(
                                    <h4 className='popular-content'>{retailer.Name}</h4>
                                )
                            })
                        }
                    </div>: <></> }
                </Row>
            </div>
        </Container>
    )
}