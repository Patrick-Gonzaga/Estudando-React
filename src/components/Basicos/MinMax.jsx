export default ({ min, max }) => {
  let med = Math.ceil(min + Math.random() * (max - min));
  return <div>{med}</div>;
};
