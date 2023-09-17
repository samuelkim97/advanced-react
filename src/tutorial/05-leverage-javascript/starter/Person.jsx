import defaultAvatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "no nickname", images }) => {
  const img = images?.[0]?.small?.url ?? defaultAvatar;

  return (
    <div style={{ margin: "4rem 0" }}>
      <img src={img} alt={name} style={{ width: 300 }} />
      <h2>{name}</h2>
      <h4>
        nickname :
        <br />
        {nickName}
      </h4>
    </div>
  );
};
export default Person;
