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

    let namesEl = props.namesData.map(n => <NameItem img={n.img} name={n.name} id={n.id} />)

    return (
        <div className={styles.wrapper}>
            {namesEl}
        </div>
    )
}

export default VoiceChannel;