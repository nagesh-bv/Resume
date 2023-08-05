
import styled from 'styled-components';
import TimelineContent from '@mui/lab/TimelineContent';

export const Name = styled.h1`
    font-weight: bolder;
    font-size: 30px;
    color: ${({theme}) => theme.heading};
`

export const TitleComponentContainer = styled.div`
    display:flex;
    align-items:center;
`

export const Designation = styled.b`
    font-weight: bolder;
    font-size: 12px;
`
export const ComponyName = styled.i`
    align-items:center;
    font-size: 12px;
    margin-left: 5px;
    `
export const List = styled.li`
    // align-items:center;
    font-size: 12px;
    color: ${({theme}) =>theme.primaryText}
`

export const CustomTimelineContent = styled(TimelineContent)`
color: ${({theme}) => theme.heading};
`