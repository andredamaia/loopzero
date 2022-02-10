<div class="boilerplate">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-lg-4 col-lg-offset-2 text-center main">
                <h2 style="opacity: 0;">Formulário integrado com <a href="https://formsubmit.co/" target="_blank">formsubit.co</a></h2>

                <p>Requer confirmação: o primeiro envio deve ser confirmado no e-mail do remetente</p>

                <div class="module-tip">
                    <span class="tip-title">Altere o email no <span>`action`</span> do form para testar</span>
                </div>

                <div class="module-tip">
                    <span class="tip-title">O campo <span>`_next`</span> é o endereço de retorno </span>
                </div>

                <div class="module-tip">
                    <span class="tip-title"><span>`_subject`</span> permite editar o assunto do e-mail </span>
                </div>

                <div class="module-form">
                    <form action="https://formsubmit.co/email@remetente.com" method="POST" enctype="multipart/form-data" class="form-default">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="text" name="_honey" style="display:none">
                        <input type="hidden" name="_next" value="<?php echo $pageurl; ?>/contato/sent">
                        <input type="hidden" name="_subject" value="Novo orçamento">

                        <div class="row">
                            <div class="col-sm-8">
                                <label for="name">Nome</label>
                                <input type="text" name="name" placeholder="Seu nome completo" required />
                            </div>

                            <div class="col-sm-8">
                                <label for="e-mail">E-mail</label>
                                <input type="text" name="e-mail" placeholder="E-mail principal" required />
                            </div>

                            <div class="col-sm-8">
                                <label for="company">Assunto</label>
                                <input type="text" name="company" placeholder="Sobre o que deseja falar?" required />
                            </div>

                            <div class="col-sm-8">
                                <label class="text-textarea" for="message">Resumo</label>
                                <textarea name="message" placeholder="Fique a vontade..." required></textarea>
                            </div>

                            <div class="col-sm-8 col-lg-3 text-center">
                                <label for="arquivo" style="width: 100%;" class="file">
                                    <input 
                                        type="file" 
                                        accept="image/png, image/jpeg, application/pdf, application/vnd.ms-excel" 
                                        name="arquivo" 
                                        id="arquivo" 
                                        style="display: none;"
                                    />
                                        
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>   
                                    <span>Arquivo</span>
                                </label>
                            </div>

                            <div class="col-sm-8 col-lg-5">
                                <button type="submit" class="button-secundary button-quote">Enviar formulário</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>