import style from './Students.module.css';

export function StudentsNoData() {
    return <div className={style.error}>Could not find students data</div>;
}