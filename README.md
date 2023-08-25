# bikcraft

Projeto final do curso da origamid.

OBSERVAÇÃO: Estou usando este projeto para praticar TailwindCSS.

## Principais Aprendizados

### Efeito de underline on hover

```css
/* só funciona acima do breakpoint 'md' */
after:hidden md:after:block

/* estilo da linha */
after:h-[2px] after:bg-stone-50 after:mt-1

/* 'w-0' pra esconder; 'w-full' pra mostrar on hover */
after:w-0 hover:after:w-full

/* a linha aparece suavement */
after:duration-300

/*
position absolute pra não influenciar no tamanho do elemento
(isso iria bagunçar o meu layout)
*/
relative after:absolute;
```

### Efeito de imagem "vazando" do container

**OBSERVAÇÃO**: a cor definida pra inset do shadow deve ser a mesma do
background do `<body>` pra poder dar a ilusão de imagem "vazando" do container.

```html
<!-- observar o shadow com 'inset' abaixo -->
<main class="bg-stone-950 text-stone-50 shadow-[inset_0_-120px_white]">
  <div class="max-w-7xl mx-auto px-5 grid grid-cols-2 gap-y-0 gap-x-10">
    <!-- OBS: 'pb-52' adicionando um padding de 208px -->
    <div class="self-end pb-52">...</div>

    <!--
      - 'h-full' pra ficar com o height 100% da container
      - 'object-cover' pra não deformar a imagem
    -->
    <img
      class="h-full object-cover"
      src="./img/fotos/introducao.jpg"
      alt="Bicicleta elétrica preta"
    />
  </div>
</main>
```

### Evitar deformação de uma imagem com h-full

> `h-full` == `height: 100%`

```html
<img class="h-full object-cover" />
```
