# Formulário de Inscrição para Programas de Capacitação do Governo do Maranhão

## 1. Introdução
Este documento tem como objetivo descrever detalhadamente o funcionamento do sistema de inscrição para os programas de capacitação oferecidos pelo Governo do Maranhão.

O sistema foi desenvolvido para facilitar o processo de registro e gestão dos participantes, permitindo que usuários realizem seu cadastro, façam login, recuperem suas credenciais e acompanhem informações sobre as inscrições.

---

## 2. Objetivo do Sistema
O sistema tem como finalidade permitir o cadastro de usuários, com a parte visual do formulário já concluída. Futuramente, será integrada uma base de dados para registrar as informações e gerenciar a participação em programas de aprendizagem. Inicialmente, o sistema deve proporcionar uma gestão eficiente dos usuários, oferecendo funcionalidades como:
- Cadastro de novos participantes no programa.
- Autenticação segura via login e senha.
- Recuperação de senha por meio de e-mail.
- Painel informativo, contendo um gráfico de inscrições por trilha de aprendizagem.

Além disso, a plataforma busca ser intuitiva e responsiva, garantindo acessibilidade para todos os públicos.

---

## 3. Público-Alvo
O sistema é direcionado para maiores de idade (18 a 99 anos), pois os programas de capacitação são exclusivos para esse público.

Os principais perfis de usuários incluem:
- Profissionais que desejam aprimorar seus conhecimentos e se qualificar para o mercado de trabalho.
- Pessoas interessadas em adquirir novas habilidades e melhorar sua formação.
- Empresas que desejam inscrever seus colaboradores para capacitá-los em trilhas específicas.

---

## 4. Funcionalidades Essenciais
O sistema oferece um conjunto de funcionalidades que garantem uma experiência intuitiva, fluida e eficiente para os usuários, desde o cadastro até o acesso ao painel principal.

### 4.1 Cadastro de Usuário
- **Acesso à Página de Inscrição:** Novos usuários podem acessar a página de inscrição através de um link na página de login.
- **Preenchimento do Formulário:** O formulário de inscrição coleta os seguintes dados obrigatórios:
  - Nome completo
  - Data de nascimento
  - CPF
  - Sexo
  - Telefone
  - Comprovante de residência
  - CEP
  - Número residencial
  - Rua, bairro, estado, cidade
  - Seleção da trilha de aprendizagem
- **Validação de Idade:** O sistema verifica se o usuário tem 18 anos ou mais, impedindo o cadastro de menores de idade.
- **Confirmação de Cadastro:** Após o preenchimento, um e-mail de confirmação é enviado para o usuário ativar a conta.

### 4.2 Login de Usuário - Implementações Futuras
- **Acesso à Página de Login:** Usuários cadastrados acessam o sistema informando CPF e senha.
- **Validação de Credenciais:** O sistema valida as credenciais e exibe mensagens de erro em caso de falha.
- **Redirecionamento para a Página Principal:** Após o login bem-sucedido, o usuário é direcionado ao painel principal.

### 4.3 Recuperação e Mudança de Senha - Implementações Futuras
- **Página de Recuperação de Senha:** Usuários com senha esquecida podem solicitar a redefinição através de um link na página de login.
- **Envio de Link por E-mail:** O sistema envia um e-mail com um link para redefinição de senha.
- **Definição de Nova Senha:** O usuário define uma nova senha e acessa o sistema.
- **Opção de Mudança de Senha:** Dentro do sistema, na página principal, o usuário tem a opção de mudar a senha.

### 4.4 Página Principal e Painel Informativo - Implementações Futuras
- **Exibição do Painel:** Após o login, o usuário visualiza um painel com:
  - Um gráfico dinâmico mostrando a quantidade de inscrições em cada trilha de aprendizagem.
  - Opções para editar perfil, mudar senha e fazer logout.
- **Gráfico Interativo:** O gráfico permite acompanhar a distribuição das inscrições e auxiliar no planejamento dos programas.

---

## 5. Fluxo Lógico da Inscrição
O fluxo lógico da inscrição segue as funcionalidades essenciais, garantindo uma experiência coesa:
1. **Acesso à Página de Login:** O usuário inicia o processo na página de login.
2. **Opção de Cadastro:** Caso não possua cadastro, o usuário é redirecionado para a página de inscrição.
3. **Preenchimento do Formulário:** O usuário preenche o formulário com os dados necessários, incluindo a seleção da trilha de aprendizagem.
4. **Validação de Idade:** O sistema verifica a idade do usuário.
5. **Confirmação de Cadastro:** Um e-mail de confirmação é enviado para ativar a conta.
6. **Login e Acesso:** Após a ativação, o usuário acessa o sistema com e-mail e senha.
7. **Exibição do Painel Principal:** O usuário visualiza o painel com o gráfico de inscrições e opções de gerenciamento de conta.
8. **Recuperação de Senha:** Em caso de esquecimento, o usuário pode recuperar a senha através da página dedicada.

---

## 6. Tecnologias Utilizadas

### 6.1 Frontend (Interface do Usuário)
O frontend é responsável pela interface e experiência do usuário. As tecnologias utilizadas incluem:
- HTML, CSS, JavaScript: Para a estrutura, o design e a interação do sistema.
- Chart.js: Biblioteca para exibição do gráfico de inscrições.

### 6.2 Backend (Lógica e Processamento de Dados) - Implementações Futuras
O backend vai gerenciar os dados e a autenticação. As principais tecnologias utilizadas são:
- Node.js com Express: Para criação da API e gerenciamento das requisições.
- MySQL: Banco de dados para armazenar informações dos usuários.
  
Principais funcionalidades do backend:
- Armazenamento seguro dos dados dos usuários.
- Validação de idade no momento do cadastro.
- Envio de e-mails para confirmação de conta e redefinição de senha.
- Fornecimento de dados para o gráfico da página principal.

---

## 7. Segurança e Autenticação - Implementações Futuras

A segurança do sistema é fundamental para garantir a privacidade dos usuários. Algumas práticas adotadas incluem:

### 7.1 Proteção de Senhas
As senhas dos usuários são criptografadas usando bcrypt antes de serem armazenadas no banco de dados.

### 7.2 Validação e Proteção de Dados
- O sistema valida e-mails únicos para evitar duplicações.
- A idade mínima de 18 anos é validada no momento do cadastro.

### 7.3 Autenticação de Usuários
A autenticação é feita com tokens JWT (JSON Web Token) para garantir sessões seguras. O usuário precisa estar autenticado para acessar funcionalidades restritas.

---

## 8. Conclusão
Este sistema foi projetado para otimizar o processo de inscrição e gestão de usuários nos programas de capacitação do Governo do Maranhão. Com uma interface intuitiva e funcionalidades essenciais, ele proporciona:
- Cadastro e gestão eficiente de usuários.
- Autenticação segura e recuperação de senha.
- Visualização clara dos inscritos em cada trilha.

---
