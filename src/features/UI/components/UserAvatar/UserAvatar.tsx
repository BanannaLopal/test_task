import CSS from './UserAvatar.module.scss';
import DefaultAvatar from '../../assets/image/car-rider.png';

export const UserAvatar = ({ url }: {
  url?: string
}) => {
  return(
    <img className={CSS.root} src={url || DefaultAvatar} alt=""/>
  );
}
