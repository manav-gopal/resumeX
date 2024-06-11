import { useMediaQuery } from "@mui/material";

const BgIcon = (props:any) => {
  const isMobile = useMediaQuery('(max-width: 700px)');
  return (
    <i
      style={{
        position: 'absolute',
        backgroundImage: `url(${props.url})`,
        width: `${props.width ? props.width : '50px'}`,
        height: `${props.height ? props.height : '50px'}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        transform: `translate(${props.x}rem,${props.y}rem)`,
        opacity: `${!isMobile ? .3 : .1}`
      }}
    />
  );
};

export default BgIcon;