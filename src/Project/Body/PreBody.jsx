import { Box, Container, Typography } from "@mui/material";
import SkillsCard from "./Components/SkillsCard";

export default function PreBody() {
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h4">
            I am a Software Engineering student at the University of Palestine
            with a passion for Front-End development. Beyond the basics of HTML,
            CSS, and JavaScript, I have deeply explored React internals, state
            management, and performance optimization. My goal is to bridge the
            gap between complex logic and seamless user interfaces.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">Education </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
            nesciunt natus error consequuntur dignissimos a molestiae unde.
            Repellat est repudiandae dicta hic dolor recusandae deleniti
            mollitia culpa possimus earum?
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">Technical Skills</Typography>
          <Typography variant="body1">
            <SkillsCard skill="React" />
          </Typography>
        </Box>
      </Container>
    </>
  );
}
