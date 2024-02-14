import styles from './BotaoSalvarArduino.module.css'


function BotaoSalvarArduino (){

  return (
    <div>
        <button className={styles.confirm_button}>
          Salvar no Arduíno
        </button>
    </div>
  );
};

export default BotaoSalvarArduino;