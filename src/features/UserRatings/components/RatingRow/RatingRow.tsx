import { UserRating } from '../../models/UserRating.model';
import CSS from './RatingRow.module.scss';
import { UserAvatar } from 'features/UI';
import { cropString } from 'lib/string';
import { getTime } from 'lib/date';

export const RatingHeaderRow = () => {
  return (
    <div className={`${CSS.root} ${CSS.rootHeader}`}>
      <div className={CSS.bigCell}><b>ФИО</b></div>
      <div className={CSS.smallCell}><b>Максимальная скорость</b></div>
      <div className={CSS.smallCell}><b>Время заезда</b></div>
      <div className={CSS.smallCell}><b>Штрафное время</b></div>
      <div className={CSS.smallCell}><b>Рейтинг пользователя</b></div>
      <div className={CSS.smallCell}><b>аватар</b></div>
    </div>
  );
}

export const RatingRow = ({data}: {
  data: UserRating
}) => {
  return (
    <div className={CSS.root}>
      <div className={CSS.bigCell}>{cropString(data.name)}</div>
      <div className={CSS.smallCell}>{data.maxSpeed}</div>
      <div className={CSS.smallCell}>{getTime(new Date(data.time))}</div>
      <div className={CSS.smallCell}>{getTime(new Date(data.penaltyTime))}</div>
      <div className={CSS.smallCell}>{data.place}</div>
      <div className={CSS.smallCell}><UserAvatar/></div>
    </div>
  );
}
