import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css'

//When something is optional I can use ?: to avoid errors.
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
  //Another way to do
  //export function Avatar(props) {
  //const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? styles.AvatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
