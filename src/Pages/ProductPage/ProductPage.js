import React from 'react';
import './ProductPage.css';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ProductListItem from '../../Components/ProductListItem/ProductListItem';
import photo1 from './productPhotos/blackbala.png';
import photo2 from './productPhotos/Burgurd1.png';
import photo3 from './productPhotos/white.png';
import photo4 from './productPhotos/Green.png';
import photo5 from './productPhotos/blackbalanorm.png';
import photo6 from './productPhotos/whitebalanorm.png';
import photo7 from './productPhotos/waxcap1.png';
import photo8 from './productPhotos/waxcap2.png';
import photo9 from './productPhotos/backCargo+1b.jpg';
import photo10 from './productPhotos/backCargo+2b.jpg';
import photo11 from './productPhotos/backCargo+1c.jpg'; 
import photo12 from './productPhotos/backCargo+2c.jpg';
import photo13 from './productPhotos/parachutev1+1b.png';
import photo14 from './productPhotos/parachutev1+2b.png';
import photo15 from './productPhotos/bomberVestBlack1.png';
import photo16 from './productPhotos/bomberVestBlack2.png';
import photo17 from './productPhotos/bomberVestGreen1.png';
import photo18 from './productPhotos/bomberVestGreen2.png';
import photo19 from './productPhotos/cargoBag+1.png';
import photo20 from './productPhotos/cargoBag+2.png';
import photo21 from './productPhotos/cargoBag+3.png';
import photo22 from './productPhotos/cargov4+1b.jpg';
import photo23 from './productPhotos/cargov4+2b.png';
import photo24 from './productPhotos/cargov4+1g.jpg';
import photo25 from './productPhotos/cargov4+2g.png';
import photo26 from './productPhotos/enigmaBlack1.png';
import photo27 from './productPhotos/enigmaBlack2.png';
import photo28 from './productPhotos/enigmapantBlack1.png';
import photo29 from './productPhotos/enigmapantBlack2.png';
import photo30 from './productPhotos/enigmaWhite1.png';
import photo31 from './productPhotos/enigmaWhite2.png';
import photo32 from './productPhotos/enigmapantWhite1.png';
import photo33 from './productPhotos/enigmapantWhite2.png';
import photo34 from './productPhotos/hemHoodBlack1.png';
import photo35 from './productPhotos/hemHoodBlack2.png';
import photo36 from './productPhotos/hemHoodGrey1.jpg';
import photo37 from './productPhotos/hemHoodGrey2.png';
import photo38 from './productPhotos/hemHoodBlue1.png';
import photo39 from './productPhotos/hemHoodBlue2.png';
import photo40 from './productPhotos/parachutev2+1b.jpg';
import photo41 from './productPhotos/parachutev2+2b.jpg';

function ProductPage() {

    const products = {
        1: {
            name: 'MINI HOODED SCARF --BLACK',
            price: '125.00',
            images: [photo1],
            description: 'MINI HOODED SCARF. CAN BE TURNED INTO A BALACLAVA. IN BLACK.'
        },
        2: {
            name: 'MINI HOODED SCARF --BURGUNDY',
            price: '125.00',
            images: [photo2],
            description: 'MINI HOODED SCARF. CAN BE TURNED INTO A BALACLAVA. IN BURGUNDY.'
        },
        3: {
            name: 'MINI HOODED SCARF --WHITE',
            price: '125.00',
            images: [photo3],
            description: 'MINI HOODED SCARF. CAN BE TURNED INTO A BALACLAVE. IN WHITE.'
        },
        4: {
            name: 'MINI HOODED SCARF --GREEN',
            price: '125.00',
            images: [photo4],
            description: 'MINI HOODED SCARF. CAN BE TURNED INTO A BALACLAVA. IN GREEN.'
        },
        5: {
            name: 'HOODED SCARF --BLACK',
            price: '150.00',
            images: [photo5],
            description: 'FULL VERSION OF HOODED SCARF. DETACHABLE HOOD. IN BLACK.'
        },
        6: {
            name: 'HOODED SCARF --WHITE',
            price: '150.00',
            images: [photo6],
            description: 'FULL VERSION OF HOODED SCARF. DETACHABLE HOOD. IN WHITE.'
        },
        7: {
            name: 'WAX CAP --BLACK',
            price: '145.00',
            images: [photo7, photo8],
            description: 'BLACK COTTON CAP CELEBRATING OUR NEW COLLECTION. WAXED.'
        },
        9 : {
            name: 'WIDE BACK ZIP CARGO --BLACK',
            price: '655.00',
            images: [photo9, photo10],
            description: 'WIDE CARGO PANTS. FEATURES BACK ZIPPERS TO ACCENTUATE A FLARED SILHOUETTE. IN BLACK.'
        },
        10: {
            name: 'WIDE BACK ZIP CARGO PANTS --CAMO',
            price: '655.00',
            images: [photo11, photo12],
            description: 'WIDE CARGO PANTS. FEATURES BACK ZIPPERS TO ACCENTUATE A FLARED SILHOUETTE. IN CAMO.'
        }, 
        11: {
            name: 'PARACHUTE BOMBER JACKET V1 --BLACK',
            price: '950.00',
            images: [photo13, photo14],
            description: 'BOMBER JACKET FEATURING DETACHABLE HOOD AND MASK. IN BLACK. V1.'
        }, 
        12: {
            name: 'BOMBER VEST --BLACK',
            price: '450.00',
            images: [photo15, photo16],
            description: 'PUFFER VEST. IN BLACK.'
        }, 
        13: {
            name: 'BOMBER VEST --GREEN',
            price: '450.00',
            images: [photo17, photo18],
            description: 'PUFFER VEST. IN GREEN.'
        },
        14: {
            name: 'CARGO SLING BAG',
            price: '350.00',
            images: [photo19, photo20, photo21],
            description: 'SLING BAG. CONTAINS MULTIPLE POCKETS AND DETACHABLE SLING.'
        },
        15: {
            name: 'FLARED CARGOS V4 --BLACK',
            price: '625.00',
            images: [photo22, photo23],
            description: 'FOURTH VERSION OF OUR CARGO PANTS. FEATUREs FLARE AT THE BOTTOM. IN BLACK.'
        },
        16: {
            name: 'FLARED CARGOS V4 --GREY',
            price: '625.00',
            images: [photo24, photo25],
            description: 'FOURTH VERSION OF OUR CARGO PANTS. FEATUREs FLARE AT THE BOTTOM. IN GREY.'
        },
        17: {
            name: 'ENIGMA TRACKSUIT --BLACK',
            price: '820.00',
            images: [photo26, photo27, photo28, photo29],
            description: 'TRACKSUIT FEATURING POCKETS THROUGHOUT SLEEVE AND PANTS. IN BLACK.'
        },
        18: {
            name: 'ENIGMA TRACKSUIT --WHITE',
            price: '450.00',
            images: [photo30, photo31, photo32, photo33],
            description: 'TRACKSUIT FEATURING POCKETS THROUGHOUT SLEEVE AND PANTS. IN WHITE.'
        },
        19: {
            name: 'CURVED HEM HOODIE --BLACK',
            price: '325.00',
            images: [photo34, photo35],
            description:'HOODIE FEATURING A CURVED ZIPPER. IN BLACK.'
        },
        20: {
            name: 'CURVED HEM HOODIE --GREY',
            price: '325.00',
            images: [photo36, photo37],
            description: 'HOODIE FEATURING A CURVED ZIPPER. IN GREY.'
        }, 
        21: {
            name: 'CURVED HEM HOODIE --MIDNIGHT',
            price: '325.00',
            images: [photo38, photo39],
            description: 'HOODIE FEATURING A CURVED ZIPPER. IN MIDNIGHT BLUE.'
        }, 
        22: {
            name: 'PARACHUTE BOMBER V2 --BLACK',
            price: '950.00',
            images: [photo40, photo41],
            description: 'SECOND VERSION OF THE PARACHUTE BOMBER JACKET. FEATURES DETACHABLE HOOD AND MASK. IN BLACK.'
        }
    }


    return(
        <div className="product-page">
            <Header />
            <div className="product-list">
                {Object.keys(products).map((key) => (
                    <ProductListItem
                        key={key}
                        id={key}
                        name={products[key].name}
                        price={products[key].price}
                        images={products[key].images} 
                        description={products[key].description}/>
                        
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
