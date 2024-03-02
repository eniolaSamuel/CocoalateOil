import React from "react";
import "../styles/Ingredients.css"
import Amla from "../assets/image/svg/amla.svg"
import Argan from "../assets/image/svg/argan.svg"
import Castor from "../assets/image/svg/castor.svg"
import Coconut from "../assets/image/svg/coconut.svg"
import Eucalyptus from "../assets/image/svg/eucalypyus.svg"
import Fenugreek from "../assets/image/svg/fenugreek.svg"
import Indigo from "../assets/image/svg/indigo.svg"
import Jojoba from "../assets/image/svg/jojoba.svg"
import Lavender from "../assets/image/svg/lavender.svg"
import Olive from "../assets/image/svg/olive.svg"
import Peppermint from "../assets/image/svg/peppermint.svg"
import Rosemary from "../assets/image/svg/rosemary.svg"
import Sunflower from "../assets/image/svg/sunflower.svg"
import TeaTree from "../assets/image/svg/teaTree.svg"


export const Ingredients = () => {
    return(
        <div className="ingredients-main-frame">

            <div className="sub-ingredient-frame">
                <h1>INGREDIENTS</h1>
                <hr/>
                <p>***click on images for more information***</p>
                <div className="ingredients-set">
                    <div className="Amala-frame">
                        <a href={"/ingredients/amlaBenefits"}><img src={Amla} alt={Amla}/></a>
                        <p>Amla Oil</p>
                    </div>

                    <div className="Argan-frame">
                        <a href={"/ingredients/arganBenefits"}><img src={Argan} alt={Argan}/></a>
                        <p>Argan Oil</p>
                    </div>

                    <div className="Castor-frame">
                        <a href={"/ingredients/castorBenefits"}><img src={Castor} alt={Castor}/></a>
                        <p>Black Castor Oil</p>
                    </div>

                    <div className="Coconut-frame">
                        <a href={"/ingredients/coconutOilBenefits"}><img src={Coconut} alt={Coconut}/></a>
                        <p>Coconut Oil</p>
                    </div>

                    <div className="Eucalyptus-frame">
                        <a href={"/ingredients/eucalyptusOilBenefits"}><img src={Eucalyptus} alt={Eucalyptus}/></a>
                        <p>Eucalyptus Oil</p>
                    </div>

                    <div className="Fenugreek-frame">
                        <a href={"/ingredients/fenugreekOilBenefits"}><img src={Fenugreek} alt={Fenugreek}/></a>
                        <p>Fenugreek Oil</p>
                    </div>

                    <div className="Indigo-frame">
                        <a href={"/ingredients/indigoPowderBenefits"}><img src={Indigo} alt={Indigo}/></a>
                        <p>Indigo Powder</p>
                    </div>
                </div>

                <div className="ingredients-set">
                    <div className="Jojoba-frame">
                        <a href={"/ingredients/jojobaOilBenefits"}><img src={Jojoba} alt={Jojoba}/></a>
                        <p>Jojoba Oil</p>
                    </div>

                    <div className="Lavender-frame">
                        <a href={"/ingredients/lavenderOilBenefits"}><img src={Lavender} alt={Lavender}/></a>
                        <p>Lavender E. Oil</p>
                    </div>

                    <div className="Olive-frame">
                        <a href={"/ingredients/oliveOilBenefits"}><img src={Olive} alt={Olive}/></a>
                        <p>Olive Oil</p>
                    </div>

                    <div className="Peppermint-frame">
                        <a href={"/ingredients/peppermintOilBenefits"}><img src={Peppermint} alt={Peppermint}/></a>
                        <p>Peppermint Oil</p>
                    </div>

                    <div className="Rosemary-frame">
                        <a href={"/ingredients/rosemaryOilBenefits"}><img src={Rosemary} alt={Rosemary}/></a>
                        <p>Rosemary E. Oil</p>
                    </div>

                    <div className="Sunflower-frame">
                        <a href={"/ingredients/sunflowerOilBenefits"}><img src={Sunflower} alt={Sunflower}/></a>
                        <p>Sunflower Oil</p>
                    </div>

                    <div className="TeaTree-frame">
                        <a href={"/"}><img src={TeaTree} alt={TeaTree}/></a>
                        <p>Tea Tree Oil</p>
                    </div>
                </div>
            </div>

        </div>
    )
}