import { TasksSection, Header, Title} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <TasksSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <div>
            {body}
        </div>
    </TasksSection>
);

export default Section;