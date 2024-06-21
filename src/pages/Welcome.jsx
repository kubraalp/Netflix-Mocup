import Profiles from "../components/Profile/Profiles";
import styled from "styled-components";

const Button = styled.div`
  color: gray;
  padding: 0.5rem 1.5rem;
  border: 1px solid gray;
  display: inline-block;
`;
export default function Welcome(props) {
  const { setActiveProfile } = props;
  return (
    <>
      <h1> Who's watching? </h1>
      <Profiles setActiveProfile={setActiveProfile} />
      <Button> Manage Profiles </Button>
    </>
  );
}
