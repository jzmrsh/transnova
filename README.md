# 🚌 Transnova - Mobilidade Urbana Inteligente

Uma aplicação web de alta performance desenvolvida para centralizar e facilitar o acesso aos horários e itinerários das linhas de ônibus da **Transnova** em Nova Serrana/MG.

> **Projeto de Extensão (PEX I)**: Este software foi desenvolvido como parte do currículo de Engenharia de Software, unindo rigor técnico e utilidade pública para atender ao **ODS 11 (Cidades e Comunidades Sustentáveis)** da ONU.

## 🎯 O Problema e a Solução

Muitos usuários de transporte público enfrentam dificuldades pela falta de informações digitais acessíveis sobre horários. O **Transnova** resolve isso ao oferecer uma interface rápida, leve e sempre atualizada, permitindo que o cidadão planeje seu deslocamento com precisão.

## 🚀 Tecnologias e Engenharia

O projeto utiliza uma stack moderna para garantir escalabilidade e baixa manutenção:

* **React + TypeScript (Vite)**: Interface reativa com tipagem forte para evitar erros em runtime.
* **Tailwind CSS + Shadcn/UI**: Design responsivo focado na experiência do usuário (UX) em dispositivos móveis.
* **TanStack Query (React Query)**: Gerenciamento de estado assíncrono e cache inteligente de dados.
* **Google Sheets API**: Utilizada como um CMS (Content Management System) headless, permitindo que os horários sejam atualizados em tempo real sem a necessidade de novos deploys.
* **GitHub Actions**: Pipeline de CI/CD para deploy automatizado.

## 🛠️ Funcionalidades Principais

* 🔍 **Filtro Inteligente**: Busca instantânea por nome da linha ou destino.
* 🕒 **Cálculo de Próxima Partida**: Algoritmo que identifica automaticamente o próximo horário de saída com base no relógio do dispositivo.
* 📱 **PWA Ready**: Interface otimizada para uso em pontos de ônibus com baixo sinal de internet.
* 📊 **Dados Vivos**: Sincronização direta com planilha de dados operacionais.

## 📦 Instalação e Execução Local

1. **Clone o repositório:**
```bash
git clone https://github.com/jzmrsh/transnova.git

```


2. **Instale as dependências:**
```bash
npm install  # ou bun install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```



---

**Curso:** Engenharia de Software

**Objetivo:** Extensão Universitária - Tecnologia para a Comunidade.
