<div class="area-parceiro">
    <img src="<?php echo $pageurl; ?>/public/images/bg-parceiros.png" class="bg-parceiros" alt="" />

    <div class="container">
        <div class="parceiros-content">
            <div class="parceiro-left-side">
                <h2>Projetista: seja um parceiro Loopzero</h2>

                <p>Preencha o formulário ao lado com as suas informações para que possamos entrar em contato. Será um prazer contar com você em nossos projetos.</p>
            </div>

            <div class="parceiro-right-side">
                <form action="https://formsubmit.co/andre.jr91@gmail.com" method="POST" class="parceiros-form">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://localhost/loopzero/">

                    <div class="input-block">
                        <label for="Nome completo">Nome completo</label>

                        <input type="text" name="Nome completo" placeholder="Seu nome completo" required/>
                    </div>

                    <div class="input-block">
                        <label for="Profissão ou especialidade">Profissão ou especialidade</label>

                        <input type="text" name="Profissão ou especialidade" placeholder="Digite aqui sua ocupação" required/>
                    </div>

                    <div class="input-block">
                        <label for="Empresa">Empresa</label>

                        <input type="text" name="Empresa" placeholder="Digite aqui sua empresa" required/>
                    </div>

                    <div class="halfs-input">
                        <div>
                            <label for="Cidade">Cidade</label>

                            <input type="text" name="Cidade" placeholder="Qual a sua cidade?" required/>
                        </div>

                        <div>
                            <label for="Estado">Estado</label>

                            <input type="text" name="Estado" id="estado" placeholder="XX" required/>
                        </div>
                    </div>

                    <div class="input-block">
                        <label for="Telefone para contato">Telefone para contato</label>

                        <input type="text" name="Telefone para contato" id="phone" placeholder="(XX) XXXXX-XXXX" required/>
                    </div>

                    <div class="input-block">
                        <label for="Descreva sua experiência de forma breve">Descreva sua experiência de forma breve</label>

                        <textarea name="Descreva sua experiência de forma breve" placeholder="Conte-nos mais sobre você." cols="30" rows="5"></textarea>
                    </div>

                    <div>
                        <button class="button-elm">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>