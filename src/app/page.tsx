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
import Cadastro from '../components/cadastro'

export default function Home() {
  return (
    <div className='principal'>

      <div className='section1'>
        <Image className='logo'
          src={Logo}
          alt="Picture of the author"
        />
        <button><span className='section1Span1'>ASSINE AGORA!</span></button>
        <button><span className='section1Span2'>CHAMA NO ZAP!</span></button>
      </div>

      <div className='section2'>
        <span className='section2Span1'>Procurando o <span style={{color: '#F8971F'}}>melhor plano de internet</span>, com maior velocidade e estabilidade na conexão? Com o nosso <span style={{color: '#F8971F'}}>COMBO</span> você vai ter acesso aos melhores filmes e séries utilizando a <span style={{color: '#F8971F'}}>melhor internet da região.</span></span>
        <Image className='plano1'
          src={Plano01}
          alt="Picture of the author"
        />
        <Image className='plano2'
          src={Plano02}
          alt="Picture of the author"
        />
      </div>

      <Cadastro/>

      <div className='section4'>
        <div style={{marginTop: '2%'}}><span className='section4Span1'>A Opyt não para de crescer e já somos mais de:</span></div>
        <Image className='section4 icon1'
          src={IconT}
          alt="Picture of the author"
        />
        <div className='section4Div1'><span className='section4Span2'>18.000 MIL<br/>CLIENTES ATIVOS</span></div>
        <Image className='section4 icon2'
          src={IconS}
          alt="Picture of the author"
        />
        <div className='section4Div2'><span className='section4Span2'>4.000 KM DE<br/>FIBRA</span></div>
        <Image className='section4 icon3'
          src={IconH}
          alt="Picture of the author"
        />
        <div className='section4Div3'><span className='section4Span2'>7 CIDADES<br/>ATENDIDAS</span></div>
        <button><span className='section4-button'>CHAMA NO ZAP!</span></button>
      </div>

      <div className='section5'>
        <Image className='section5Prop1'
          src={Prop01}
          alt="Picture of the author"
        />
        <button><span className='section5Span1'>CHAMA NO ZAP!</span></button>
        <Image className='section5Rev1'
          src={Rev01}
          alt="Picture of the author"
        />
        <Image className='section5Rev2'
          src={Rev02}
          alt="Picture of the author"
        />
        <Image className='section5Rev3'
          src={Rev03}
          alt="Picture of the author"
        />
      </div>
      
      <div className='section6'>
        <Image className='section6LogoF'
          src={LogoF}
          alt="Picture of the author"
        />
        <span className='section6Span1'>© 2023 Opyt LTDA. Todos os direitos reservados</span>
        <Image className='section6IconF'
          src={IconF}
          alt="Picture of the author"
        />
        <Image className='section6IconI'
          src={IconI}
          alt="Picture of the author"
        />
        <Image className='section6IconL'
          src={IconL}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
