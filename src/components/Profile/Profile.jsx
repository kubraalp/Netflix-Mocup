import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  max-width: 300px;
  cursor: pointer;
  color: gray;

&:hover{
  color: white;
}
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  /*
  {
    id: 7,
    name: "Michael",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  }
*/
  const { name, avatar } = profile;

  const history = useHistory();
  const activeProfileHandler = () => {
    setActiveProfile(profile);
    history.push("/home");
  };
  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}

export default Profile;
