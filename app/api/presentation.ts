import { StaticImageData } from 'next/image'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'


export interface IPresentations {
  name: string
  testimonial: string
  avatar: StaticImageData
  link: string
  authorInfo: string
}

export const presentations: IPresentations[] = [
  {
    name: 'Lorena Batista',
    testimonial:
      '"Local lindo, recomendo demais. Tive o casamento dos meus sonhos."',
    avatar: avatar1,
    link: "https://br.freepik.com/fotos-gratis/um-grupo-de-jovens-sorridentes-desfrutando-de-sucesso-no-trabalho-gerado-pela-inteligencia-artificial_81921766.htm#fromView=search&page=1&position=11&uuid=7404bdcf-1cc1-40ad-9ffc-fa70cc4c97db",
    authorInfo: "Imagem de vecstock no Freepik"
  },
  {
    name: 'Sofia Braga',
    testimonial:
      '"Eu e o meu marido passamos meses procurando um lugar que fosse como sonhávamos e o Garden Wedding forneceu tudo o que queríamos."',
    avatar: avatar2,
    link: "https://br.freepik.com/fotos-gratis/close-up-amigavel-feliz-positivo-sortudo-jovem-femea-vestindo-uma-camisa-xadrez-sobre-uma-t-shirt-sorrindo-amplamente-encantado-sentindo-o-dia-incrivel-alegre-curtindo-a-vida-em-pe-com-um-fundo-branco_16686629.htm#fromView=search&page=2&position=36&uuid=78dcec51-78e4-4e4f-abbf-94bf72c78dbf",
    authorInfo: "Imagem de cookie_studio no Freepik"
  },
  {
    name: 'Aria Marin',
    testimonial:
    '"Melhor dia da minha vida. Lugar lindo, organização impecável, correu tudo bem, sem dúvidas recomendo de olhos fechados."',
    avatar: avatar3,
    link: "https://br.freepik.com/fotos-gratis/close-up-da-mulher-nova-triguenha_898743.htm#fromView=search&page=3&position=45&uuid=78dcec51-78e4-4e4f-abbf-94bf72c78dbf",
    authorInfo: "Imagem de javi_indy no Freepik"
  },
]
