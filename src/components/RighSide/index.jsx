
import * as React from 'react';
import BagIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { Timeline, TimelineEvent } from "react-event-timeline";
import { Name, Designation, TitleComponentContainer, ComponyName, List } from './rightSide.style';
import { strings } from '../../utils/strings';

const {experience_timeline, education_timeline, employee_name} = strings.right_side;
const RighSide = ({ theme }) => {
  console.log("right theme ", theme);
  const TitleComponent = ({designation = '', compony = ''}) => (
    <TitleComponentContainer>
        <Designation>{designation}</Designation>
        <ComponyName>{compony}</ComponyName>
    </TitleComponentContainer>
  )

  const Description = ({project, teamSize = 1, role = '', desc = ''}) => (
    <ul>
          <List theme={theme}>
            <b>Project: {project}</b>
          </List>
          <List theme={theme}>
            Team Size: {teamSize}
          </List>
          <List theme={theme}>
            Role: {role}
          </List>
          <List theme={theme}>
            Description: {desc}
          </List>
        </ul>
  )

  const EducationTimeline = ({title = '', timeline = []}) => (
    <Timeline
    lineStyle={{ backgroundColor: theme.secondary, marginTop: '16px' }}
  >
     <TimelineEvent
        bubbleStyle={{ backgroundColor: theme.secondary, borderRadius: 0 }}
        iconColor='white'
        title={title}
        titleStyle={{ fontSize: '18px', color: theme.heading, fontWeight: '700', height: '30px', paddingTop:'5px' }}
        contentStyle={{ boxShadow: 0}}
        icon={<SchoolIcon />}
      />
      {timeline.map((exp, index) => {
        return(
          <TimelineEvent
            iconColor='black'
            bubbleStyle={{ backgroundColor: theme.secondary, borderColor: theme.secondary,  borderRadius: 0, height: '5px', width: '5px', marginLeft: '12px', marginTop: '5px' }}
            title={<TitleComponent designation={exp.title} />}
            titleStyle={{ fontWeight: '500', color: theme.primaryText}}
            style={{ marginTop: index === 0 ? 0 : '30px'}}
            subtitle={<TitleComponent designation={exp.college} compony={exp.univercity} />}
            contentStyle={{ boxShadow: 0, padding: 0, margin: 0 }}
          />
        )
      })}
  </Timeline>
  )

  const ExperienceTimeline = ({title = '', timeline = []}) => (
    <Timeline
      lineStyle={{ backgroundColor: theme.secondary }}
    >
      <TimelineEvent
        bubbleStyle={{ backgroundColor: theme.secondary, borderRadius: 0 }}
        iconColor='white'
        title={title}
        titleStyle={{ fontSize: '18px', color: theme.heading, fontWeight: '700', height: '30px', paddingTop:'5px' }}
        contentStyle={{ boxShadow: 0}}
        icon={<BagIcon />}
      />
      {timeline.map(exp => {
        return (
          <TimelineEvent
            iconColor='black'
            bubbleStyle={{ backgroundColor: theme.secondary, borderColor: theme.secondary, borderRadius: 0, height: '5px', width: '5px', marginLeft: '12px', marginTop: '5px' }}
            title={<TitleComponent designation={exp.designation} compony={exp.componyName} />}
            titleStyle={{ fontWeight: '500', color: theme.primaryText }}
            subtitle={exp.period}
            contentStyle={{ boxShadow: 0, padding: 0, margin: 0, backgroundColor: theme.primary }}
          >
            {exp.projectDetails.map(proj => {
              return (
                <Description
                  project={proj.project}
                  teamSize={proj.teamSize}
                  role={proj.role}
                  desc={proj.description}
                />
              )
            })}
          </TimelineEvent>
        )
      })}
    </Timeline>
  )
  const RenderName = () => (
    <Name theme={theme}>{employee_name}</Name>
  )

  return (
    <div style={{ paddingLeft: '50px', width: '65%', height: '100%', backgroundColor: theme.primary, minHeight: '2244px' }}>
      <RenderName />
      <ExperienceTimeline title='EXPERIENCE' timeline={experience_timeline}/>
      <EducationTimeline title='EDUCATION' timeline={education_timeline}/>
    </div>
  );
}

export default RighSide;