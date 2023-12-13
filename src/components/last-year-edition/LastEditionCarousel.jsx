import React from "react";
import LastYearEdition from './LastYearEdition';
import img1 from './2022-edition-images/01.png';
import img2 from './2022-edition-images/02.jpg';
import img3 from './2022-edition-images/03.jpg';
import img4 from './2022-edition-images/04.jpg';
import img5 from './2022-edition-images/05.jpg';
import img6 from './2022-edition-images/06.jpg';
import img7 from './2022-edition-images/07.jpg';
import img8 from './2022-edition-images/08.jpg';

const LastEditionCarousel = () => {
    return <LastYearEdition images={[img1, img2, img3, img4, img5, img6, img7, img8]} />
}

export default LastEditionCarousel;