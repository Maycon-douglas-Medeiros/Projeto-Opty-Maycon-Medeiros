import Image from 'next/image'
import Logo from '@/images/Logo.png'
import LogoF from '@/images/LogoF.png'
import Plano01 from '@/images/Plano01.png'
import Plano02 from '@/images/Plano02.png'
import IconT from '@/images/Icon_T.png'
import IconS from '@/images/Icon_S.png'
import IconH from '@/images/Icon_H.png'
import IconF from '@/images/Icon_F.png'
import IconI from '@/images/Icon_I.png'
import IconL from '@/images/Icon_L.png'
import Prop01 from '@/images/Prop01.png'
import Rev01 from '@/images/Rev01.png'
import Rev02 from '@/images/Rev02.png'
import Rev03 from '@/images/Rev03.png'

export default function Home() {
  return (
    <div style={{ background: "#E6E6E6", position: 'absolute', width: '100%', height: '100%'}}>
      <div style={{ position: 'absolute', width: '100%', height: '10%'}}>
        <Image style={{ position: 'absolute', width: '8%', height: '65%', top: '10%', left: '23%'}}
          src={Logo}
          alt="Picture of the author"
        />
        <button><span style={{ borderRadius: '5px', background: '#F8971F', color: 'white', position: 'absolute', width: '18%', height: '40%', top: '25%', left: '42%', fontFamily: 'Arial', fontSize: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>ASSINE AGORA!</span></button>
        <button><span style={{ borderRadius: '5px', background: '#25D366', color: 'white', position: 'absolute', width: '18%', height: '40%', top: '25%', left: '66%', fontFamily: 'Arial', fontSize: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>CHAMA NO ZAP!</span></button>
      </div>
      <div style={{ position: 'absolute', width: '34%', height: '69%', top: '10%', left: '16%'}}>
        <span style={{ fontSize: '120%', fontFamily: 'Arial', fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word'}}>Procurando o <span style={{color: '#F8971F'}}>melhor plano de internet</span>, com maior velocidade e estabilidade na conexão? Com o nosso <span style={{color: '#F8971F'}}>COMBO</span> você vai ter acesso aos melhores filmes e séries utilizando a <span style={{color: '#F8971F'}}>melhor internet da região.</span></span>
        <Image style={{ position: 'relative', width: '92%', height: '35%', top: '4%', left: '4%'}}
          src={Plano01}
          alt="Picture of the author"
        />
        <Image style={{ position: 'relative', width: '92%', height: '35%', top: '6%', left: '4%'}}
          src={Plano02}
          alt="Picture of the author"
        />
      </div>
      <div style={{ background: '#777777', position: 'absolute', width: '34%', height: '69%', top: '10%', left: '50%'}}>
        
      </div>
      <div style={{ textAlign: 'center',background: '#151515', position: 'absolute', width: '100%', height: '35%', top: '79%'}}>
        <div style={{marginTop: '2%'}}><span style={{ color: 'white', fontSize: '200%', fontFamily: 'Arial', fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word'}}>A Opyt não para de crescer e já somos mais de:</span></div>
        <Image style={{ position: 'relative', width: '5%', height: '18%', top: '10%', left:'-15%', display: 'inline-block'}}
          src={IconT}
          alt="Picture of the author"
        />
        <div style={{marginTop: '2.5%', position: 'absolute', left: '22%'}}><span style={{ color: 'white', fontSize: '120%', fontFamily: 'Arial',fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word'}}>18.000 MIL<br/>CLIENTES ATIVOS</span></div>
        <Image style={{ position: 'relative', width: '5%', height: '18%', top: '10%', left:'1%', display: 'inline-block' }}
          src={IconS}
          alt="Picture of the author"
        />
        <div style={{marginTop: '2.5%', position: 'absolute', left: '45%'}}><span style={{ color: 'white', fontSize: '120%', fontFamily: 'Arial', fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word'}}>4.000 KM DE<br/>FIBRA</span></div>
        <Image style={{ position: 'relative', width: '8%', height: '18%', top: '10%', left:'15%', display: 'inline-block' }}
          src={IconH}
          alt="Picture of the author"
        />
        <div style={{marginTop: '2.5%', position: 'absolute', left: '65.5%'}}><span style={{ color: 'white', fontSize: '120%', fontFamily: 'Arial', fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word' }}>7 CIDADES<br/>ATENDIDAS</span></div>
        <button><span style={{ borderRadius: '30px', background: '#25D366', color: 'white', position: 'absolute', width: '20%', height: '17%', top: '80%', left: '40%', fontFamily: 'Arial', fontSize: '130%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>CHAMA NO ZAP!</span></button>
      </div>

      <div style={{ background: '#E7E7E7', position: 'absolute', width: '100%', height: '140%', top: '114%'}}>
        <Image style={{ position: 'absolute', width: '70%', height: '45%', left: '15%' }}
          src={Prop01}
          alt="Picture of the author"
        />
        <button><span style={{ borderRadius: '5px', background: '#25D366', color: 'white', position: 'absolute', width: '70%', height: '4%', top: '47%', left: '15%', fontFamily: 'Arial', fontSize: '200%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>CHAMA NO ZAP!</span></button>
        <Image style={{ position: 'absolute', width: '23%', height: '45%', left: '15%', top: '54%'}}
          src={Rev01}
          alt="Picture of the author"
        />
        <Image style={{ position: 'absolute', width: '23%', height: '45%', left: '38.5%', top: '54%' }}
          src={Rev02}
          alt="Picture of the author"
        />
        <Image style={{ position: 'absolute', width: '23%', height: '45%', left: '62%', top: '54%' }}
          src={Rev03}
          alt="Picture of the author"
        />
      </div>
      <div style={{ background: '#151515', position: 'absolute', width: '100%', height: '7%', top: '254%'}}>
        <Image style={{ position: 'absolute', width: '5%', height: '50%', left: '33%', top: '25%' }}
          src={LogoF}
          alt="Picture of the author"
        />
        <span style={{ color: 'white', position: 'absolute', top: '40%', left: '40%', fontFamily: 'Arial', fontSize: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>© 2023 Opyt LTDA. Todos os direitos reservados</span>
        <Image style={{ position: 'absolute', width: '2%', height: '40%', left: '68%', top: '30%' }}
          src={IconF}
          alt="Picture of the author"
        />
        <Image style={{ position: 'absolute', width: '2%', height: '40%', left: '72%', top: '30%' }}
          src={IconI}
          alt="Picture of the author"
        />
        <Image style={{ position: 'absolute', width: '2%', height: '40%', left: '76%', top: '30%' }}
          src={IconL}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
