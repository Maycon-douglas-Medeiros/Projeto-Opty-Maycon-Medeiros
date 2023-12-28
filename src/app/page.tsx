import Image from 'next/image'
import Logo from '@/images/Logo.png'
import Plano01 from '@/images/Plano01.png'
import Plano02 from '@/images/Plano02.png'

export default function Home() {
  return (
    <div style={{background: "#E6E6E6", position: 'absolute', width: '100%', height: '100%'}}>
      <div style={{position: 'absolute', width: '100%', height: '10%'}}>
        <Image style={{position: 'absolute', width: '8%', height: '65%', top: '10%', left: '23%'}}
          src={Logo}
          alt="Picture of the author"
        />
        <button><span style={{borderRadius: '5px', background: '#F8971F', color: 'white', position: 'absolute', width: '18%', height: '40%', top: '25%', left: '42%', fontFamily: 'Arial', fontSize: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>ASSINE AGORA!</span></button>
        <button><span style={{borderRadius: '5px', background: '#25D366', color: 'white', position: 'absolute', width: '18%', height: '40%', top: '25%', left: '66%', fontFamily: 'Arial', fontSize: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>CHAMA NO ZAP!</span></button>
      </div>
      <div style={{position: 'absolute', width: '34%', height: '69%', top: '10%', left: '16%'}}>
        <span style={{fontSize: '120%', fontFamily: 'Arial', fontWeight: '400', lineHeight: '10%', wordWrap: 'break-word'}}>Procurando o <span style={{color: '#F8971F'}}>melhor plano de internet</span>, com maior velocidade e estabilidade na conexão? Com o nosso <span style={{color: '#F8971F'}}>COMBO</span> você vai ter acesso aos melhores filmes e séries utilizando a <span style={{color: '#F8971F'}}>melhor internet da região.</span></span>
        <Image style={{position: 'relative', width: '92%', height: '35%', top: '4%', left: '4%'}}
          src={Plano01}
          alt="Picture of the author"
        />
        <Image style={{position: 'relative', width: '92%', height: '35%', top: '6%', left: '4%'}}
          src={Plano02}
          alt="Picture of the author"
        />
      </div>
      <div style={{ background: '#777777', position: 'absolute', width: '34%', height: '69%', top: '10%', left: '50%'}}>
        
      </div>
      <div style={{ background: '#101010', position: 'absolute', width: '100%', height: '40%', top: '79%'}}>
        
      </div>

      <div style={{ background: '#AAAAAA', position: 'absolute', width: '100%', height: '80%', top: '100%'}}>
        
      </div>
      <div style={{ background: '#101010', position: 'absolute', width: '100%', height: '7%', top: '180%'}}>
        
      </div>
    </div>
  )
}
