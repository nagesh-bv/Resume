import React from 'react'
import { Contact, Container, ProfileImage, Row } from './leftSide.style';
import Pic from '../../assets/img/pic.png';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Devider from '../Devider';
import { strings } from '../../utils/strings';

const FONT_SIZE = '12px';
const HEADER_FONT_SIZE = '15px';
const {contact, professional_summery, core_qualification} = strings.left_side;
const LeftSide = ({theme}) => {
    console.log(
        "left theme: ", theme
    );
    const contactStyle = { fontSize: FONT_SIZE, marginLeft: 5, color: theme.primaryText };
    const headerStyle = {marginLeft: 15, fontWeight: 'bolder', fontSize: HEADER_FONT_SIZE, color: theme.primaryText };
    const detailsTextStyle = {fontSize: FONT_SIZE, marginBottom:16, marginRight: 10, color: theme.primaryText};
    const iconStyle = {color: theme.primaryText};

    return (
        <Container theme={theme}>
            <ProfileImage src={Pic} />
            <Contact>
                <b style={headerStyle}>CONTACT</b>
                <Row>
                    <RoomIcon sx={iconStyle}/>
                    <p style={contactStyle}>{contact.place}</p>
                </Row>
                <Row>
                    <CallIcon sx={iconStyle}/>
                    <p style={contactStyle}>{contact.phone}</p>
                </Row>
                <Row>
                    <EmailIcon sx={iconStyle}/>
                    <p style={contactStyle}>{contact.email}</p>
                </Row>
            </Contact>
        
            <div>
            <Devider theme={theme}/>
                <b style={headerStyle}>PROFESSIONAL SUMMARY</b>
                <ul>
                    {professional_summery.map(e => <li style={detailsTextStyle}>{e}</li>)}
                </ul>
            <Devider theme={theme}/>
            </div>

            <div>
                <b style={headerStyle}>CORE QUALIFICATIONS</b>
                <ul>
                    {core_qualification.map(e => <li style={detailsTextStyle}>{e}</li>)}
                </ul>
            </div>
        </Container>
    );
}

export default LeftSide;