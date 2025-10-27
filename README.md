# Entregas-- DIO


#Repositórios para armazenar resumos sobre o Git e GitHub do curso de Versionamento de Código com Git e GitHub da [Digital Innovation One](https://www.dio.me/).

## 📚 Documentação
- [Repositório com Link para Aulas de Git e GitHub](https://github.com/digitalinnovationone/github-quickstart)
- [Material textual sobre GitHub](https://aline-antunes.gitbook.io/formacao-fundamentos-github)
- [ GitHub Markdown](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) 


## 💻Resumos das Aulas AWS

#Criando a conta 

Google: Pesquisar “aws free account”
Serviços de computação em nuvem gratuitos - Nível gratuito da AWS
Plano gratuito 
- Experimente a AWS por até 6 meses sem custo ou compromisso
- Receba até 200 USD em créditos
- Inclui o uso gratuito de serviços selecionados
- Não há cobranças, a menos que você mude para o plano pago
- Workloads que ultrapassam os limites de crédito
- Acesso a todos os serviços e recursos da AWS
Dados iniciais: email e nome para a conta 
Um codigo sera enviado para esse email 
Cadastro da senha que deve ter 


Informar que a contar é de projetos proprios
seu nome completo 
telefone para envio do codigo de verificação 
endereço 
Informar caracteres especiais 
Informar numero de telefone para verificação 
codigo de verificação 
Selecionar um plano de suporte: Suporte Basic- gratuito 
Acesse o console

#Regions
Escolher região: Norte da Virgínia mais barata e estamos estudando 
São Paulo é a região mais cara….. O professor optou por trabalhar no Norte da Virginia 


#🧾Pergunta de prova 
De que forma eu posso criar meus recursos na aws ?
- Via portal
- aws sdk
- CloudShell

#CloudShell
Criar recursos e maquina virtual por codificação/script 

#Instâncias EC2
Máquina virtual dentro da AWS. Importante saber o tipo e família. 
- Compartilhamento de responsabilidades;
- Sempre olhar para custos;
- Conhecer seus recursos;
   - Cada tipo de instância oferece diferentes poderes computacionais;
   - É possível fazer o upgrade e o downgrade do recurso. 
   - Uma instância pode ser reservada por um período.
     - Posso utilizar uma instância mais barata no dia a dia e durante, por exemplo, a folha de pagamento uma vez no mês, que a uma carga de trabalho fora do padrão diário. Gastar só quando necessário. 
      - Ligar o recurso só quando necessário, exemplo, um recurso utilizado somente durante o horário comercial de 08h às 17h, após esse horário de stop e  desaloque o recurso, assim você não irá pagar pela instância. 
- Uma observação a instância SPOT não é muito interessante…ela é bem barata, pode ser até 90% mais barata, contudo ela pode ser desligada pela Amazon com um aviso de 2minutos de antecedência. Não sendo nada vantajoso 

#Armazenamento na Nuvem
Como se fosse um HD externo. Um anexo para o Ec2
- Quando contrato o Ec2 ele vem com uma quantidade de memória, mas essa quantidade de memória é para guardar o sistema operacional. 
- Recuperação mais rápida dos arquivos até os 3 primeiros.
    - Frequente acesso standard.
    - Só se alguém solicitar Glaciar 
- A regra de ciclo de vida é uma ótima ideia para gerenciar objetos. 
    - Mais de 90 dias Glacier 
    - Menos de 90 dias S3

#Gerenciamento de instâncias EC2
- Criação e uso de imagens AMI
Instâncias EC2 são as Vms virtualizadas dentro da AWS. Existe a possibilidade de a partir de uma imagem base eu criar outras instâncias. 


#Snapshot com EBS
- Os backups devem ser feitos em ambientes de produção e homologação. 
- Os snapshots devem ser feitos em ambientes diferentes da origem da imagem original.
- Se você esta em uma região e seu Snapchot esta em outra haverá problemas de latência. 


#Desafio de Arquitetura
- EC2- EBS
- S3-Lambda Function


