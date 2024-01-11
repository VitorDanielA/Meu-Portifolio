import React, { useState, useEffect} from "react";
import axios from 'axios';
import styles from './../components/css/BuscadorClima.module.css';
import { GeoAltFill, Sun, Thermometer, ThermometerHalf, SunFill } from "react-bootstrap-icons";
import CardTemp from "./estrutura/CardTemp";

export default function Pagina5(){

    const [clima, setClima] = useState(null);
    const [cidade, setCidade] = useState();
    const datas = new Date();
    const dia = datas.getDay();
    const diaMes = datas.getDate();
    const mes = datas.toLocaleString('pt-br', {month: 'short'});
    const ano = datas.getFullYear();
    const dataCompleta = `${diaMes} ${mes} ${ano}`;
    const pais = clima && clima.sys ? clima.sys.country : "";
    const nomeCidade = clima && clima.name ? clima.name : "";;
    const temperatura = clima ? (clima.main.temp - 273).toFixed(1) : "";
    const vento = clima ? clima.wind.speed : "";
    const humidade = clima ? clima.main.humidity : "";
    const pressao = clima ? clima.main.pressure : "";
    const tempMin = clima ? (clima.main.temp_min - 273).toFixed(1) : "";
    const tempMax = clima ? (clima.main.temp_max - 273).toFixed(1) : "";
    const sensTermica = clima ? (clima.main.feels_like - 273).toFixed(1) : "";

    const buscarClima = async () => {
      try {
        const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=5ac12826003a427634ea470eaac014d3`
        );
        setClima(response.data); 
        } catch (error) {
          console.error('Erro ao buscar dados de clima', error);
          setClima(null);
        }
      };

      useEffect(() => {
        console.log(clima);
      }, [clima]);

      var diaDaSemana = [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
      ]

      // const mesesDoAno = [
      //   "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      // ]

      const traduzirClima = (descricao) => {

        const traducoes = {
            'clear sky' : 'Céu Limpo',
            'few clouds': 'Poucas Nuvens',
            'broken clouds': 'Nuvens Quebradas',
            'scattered clouds': 'Nuvens Dispersas',
            'overcast clouds': 'Nuvens Carregadas',
            'light rain': 'Chuva Leve',
            'light intensity drizzle': 'Relâmpagos Intensos',
            'heavy intensity rain': 'Chuva de Forte Intensidade',
            'mist' : 'misto'
        }

        return traducoes[descricao.toLowerCase()] || descricao;
      }

      const climaAtual = clima && clima.weather ? traduzirClima(clima.weather[0].description) : "";

    return(
        <div className={`${styles.body} d-flex justify-content-center align-items-center `}>
            <div className={`${styles.containerP}`}>
                <div className={`${styles.containerEsquerda} me-3 p-3`}>
                  <h3>{diaDaSemana[dia]}</h3>
                  <p>{dataCompleta}</p>
                  <p><GeoAltFill size={16} color="#555555"/> {nomeCidade ? nomeCidade : "Seabra"}, {pais ? pais : "BR"}</p>
                  <p className="mt-5"><Sun size={72} color="#555555" className="mt-5"/></p>
                  <h1 className={styles.fontBold}>{temperatura ? temperatura : "29"}°C</h1>
                  <p className={`${styles.fontBold} ${styles.clima}`}>{climaAtual ? climaAtual : "Dia Ensolarado"}</p>
                </div>
                <div className={`${styles.containerDireita} p-3`}>
                  <p>HUMIDADE <label className="ms-5 float-end">{humidade ? humidade : "0"} %</label></p>
                  <p>PRESSÃO <label className="ms-5 float-end">{pressao ? pressao : ""} hPa</label></p>
                  <p>VENTO <label className="ms-5 float-end">{vento ? vento : "0"} km/h</label></p>
                  <div className="d-flex justify-content-around mt-5">
                    <CardTemp text = "Min" temp = {`${tempMin}`} icone = <Thermometer size={20} color="#292929"/> />
                    <CardTemp text = "Max" temp = {tempMax} icone = <ThermometerHalf size={20} color="#292929"/> />
                    <CardTemp text = "Sens" temp = {sensTermica} icone = <SunFill size={20} color="#292929"/> />
                  </div>
                  <p><input type="text" onChange={(e) => setCidade(e.target.value)} className={`${styles.input} w-100 mt-5`}></input></p>
                  <button className={`${styles.btn} btn btn-primary`} onClick={() => buscarClima()}><GeoAltFill size={16} color="white" className="me-2"/>Buscar Localização</button>
                </div>
            </div>
        </div>
    )
}