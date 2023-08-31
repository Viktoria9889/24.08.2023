import styles from './VoiceChannel.module.css';

const NameItem = (props) => {
    return (
        <div className={styles.name_wrapper}>
            <div>{props.img}</div>
            <div>{props.name}</div>
        </div>
    )
}

const VoiceChannel = (props) => {

    let namesEl = props.users.map(n => <NameItem img={<img src={n.img} className={styles.img} alt="" />} name={n.name} id={n.id} />)

    return (
        <div className={styles.wrapper}>
            {namesEl}
        </div>
    )
}

export default VoiceChannel;