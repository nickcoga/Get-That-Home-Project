// import styled from '@emotion/styled';
// import React, { useState } from 'react';
// import LandPageImage from '../../assets/illustration_1.png';
// import Text from '../styles/Heading';
// import '../CardComponentProperty/CardComponentProperty.css'
// import NavbarWelcome from '../NavbarWelcome/NavbarWelcome';
// import NavbarLanding from '../UI/NavbarLanding';
// import CardComponentProperty from '../CardComponentProperty/CardComponentProperty';
// import { colors } from '../styles/ColorStyles';
// import ButtonNavbarWelcome from '../NavbarWelcome/ButtonNavbarWelcome';
// import CardTeam from '../UI/CardTeam';
// import FooterLanding from '../UI/FooterLanding';
// import LoginForm from '../features/session/LoginForm';

// const LandPageStyles=styled.div`
//     width: 100%;
    
//     .login-form {
//         position: absolute;
//         left: 36%;
//         top: 16%;
//     }

//     .landPage {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         margin: 60px 0 0 0;
//         .secondHeader {
//             position: absolute;
//             &--styles {
//                 margin: 64px 0 0 0;
//                 padding: 0;
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             }
//         }
    
//         .landingImage {
//             width: 100%;
//         }

//         .landingLogin {
//             width: 100%;
//             box-sizing: border-box;
//         }

//         .box-cards {
//             box-sizing: border-box;
//             width: 100%;
//             padding: 64px 222px;
//             display: flex;
//             flex-direction: column;
//             align-items: center;

//             .box-cards--properties {
//                 width: 100%;
//                 display: flex;
//                 padding: 8px 0 0 0;
//             }
//         }

//         .createAccount {
//             width: 100%;
//             padding: 64px 308px;
//             box-sizing: border-box;
//             margin: 0;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             background: ${colors.ShallowPink};
//         }

//         .team {
//             width: 100%;
//             margin: 64px 0;
//             box-sizing: border-box;
//         }

//         .footer {
//             width: 100%;
//             box-sizing: border-box;
//         }
//     }
    
// `;

// const LandPage = () => {
//     const [login, setLogin] = useState(false);
//     return (
//         <LandPageStyles>
//             <NavbarLanding login={login} setLogin={setLogin}/>
//             {
//                 login && <div className="login-form"><LoginForm /></div>
//             }
//             <div className="landPage">
//                 <div className={login ? "secondHeader--login" : "secondHeader"}>
//                     <div className="secondHeader--styles">
//                         <Text type='Montserrat' size='H2'>Meet your new home</Text>
//                         <Text type='Montserrat' size='H5'>The easiest way to find where you belong</Text>
//                         <NavbarWelcome />
//                     </div>
//                 </div>
//                 <img src={LandPageImage} alt="Buildings" className={login ? "landingLogin" : "landingImage"}/>
//                 <div className="box-cards">
//                     <Text type='Montserrat' size='Subtitle2'>Find an Apartment you Love</Text>
//                     <Text type='Montserrat' size='H4' color='DarkPink'>Homes for rent at the best prices</Text>
                    
//                     {/* ¡IMPORTANTE!: por el momento esto ira asi, despues le pondre el map */}
//                     <div className="box-cards--properties">
//                         <CardComponentProperty />
//                         <CardComponentProperty />
//                         <CardComponentProperty />
//                     </div>
//                 </div>
//                 <div className="createAccount">
//                     <Text type='Montserrat' size='H4' color='DarkGray'>Getting someone to rent your apartment has never been this easy</Text>
//                     <ButtonNavbarWelcome 
//                         paddingTop='16px'
//                         paddingRight='24px'
//                         paddingBottom='16px'
//                         paddingLeft='24px'
//                         family='Inter'
//                         size='14px'
//                         letter='1.25px'
//                         nameButton='Create an account now'
//                         margin='32px 0 0 0'
//                     />
//                 </div>

//                 <div className="team">
//                     <Text type='Montserrat' size='H3' color='DarkPink'>Meet the team</Text>
//                     <CardTeam/>
//                 </div>
//                 <div className="footer">
//                     <FooterLanding />
//                 </div>
//             </div>
//         </LandPageStyles>
//     )
// }

// export default LandPage;
