import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Input } from '../components/ui/Input';
import { SelectInputGroup } from '../components/ui/SelectInputGroup';
import { MainLayout } from '../layout/MainLayout';
import { documentOptions } from '../utils/documents';
import rimacFamily from '../assets/img/rimac-family.png';

export const SeguroSaludFlexible = () => (
  <MainLayout>
    <div className="grid gap-10 pb-8 md:py-8 px-0 md:px-6">
      {/* Destkop */}
      <section className="hidden md:grid grid-cols-[1fr_1fr] gap-32">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={rimacFamily}
            alt="Familia RIMAC"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col max-w-full justify-center md:max-w-88">
          <div>
            <span className="inline-flex items-center rounded bg-gradient-rimac px-2 py-1 text-sm font-bold tracking-md text-rimac-black">
              Seguro Salud Flexible
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-10 text-rimac-black tracking-sm">
              Creado para ti y tu familia
            </h1>
            <p className="mt-2 text-sm leading-5 text-rimac-black font-semibold tracking-sm">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <SelectInputGroup
              label="Documento"
              options={documentOptions}
              selectProps={{}}
              inputProps={{ name: 'document', type: 'text' }}
              className="w-full"
            />
            <Input 
              label="Celular"
              name="phone" 
              type="tel"
            />
            <div className='space-y-3'>
              <Checkbox 
                label="Acepto la Política de Privacidad" 
              />
              <Checkbox 
                label="Acepto la Política Comunicaciones Comerciales" 
              />
              <a
                href="https://midominio.com/terminos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-rimac-dark underline"
              >
                Aplican Términos y Condiciones.
              </a>
            </div>
            <Button type="button">Cotiza aquí</Button>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden">
        <div className="flex w-full gap-3 items-center">
          <div className="w-[56%]">
            <span className="inline-flex items-center rounded bg-gradient-rimac px-3 pt-1 py-0.5 text-xs font-bold leading-4 tracking-md text-rimac-black">
              Seguro Salud Flexible
            </span>
            <h1 className="mt-2 text-3xl leading-9 font-bold text-rimac-black">
              Creado para ti y tu familia
            </h1>
          </div>

          <div className="w-[44%] overflow-hidden rounded-[28px]">
            <img
              src={rimacFamily}
              alt="Familia RIMAC"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="my-6 h-px bg-rimac-border-hover" />

        <div className="space-y-4">
          <p className="text-sm font-semibold leading-5 text-rimac-black tracking-sm">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
          </p>

          <SelectInputGroup
            label="Documento"
            options={documentOptions}
            selectProps={{}}
            inputProps={{ name: 'document', type: 'text' }}
            className="w-full"
          />
          <Input 
            label="Celular" 
            name="phone" 
            type="tel" 
           />
          <div className='space-y-4 mb-9 pt-2'>
            <Checkbox 
              label="Acepto la Política de Privacidad" 
            />
            <Checkbox 
              label="Acepto la Política Comunicaciones Comerciales" 
            />
            <p className="text-xs font-semibold text-rimac-dark underline">
              Aplican Términos y Condiciones.
            </p>
          </div>
          <Button type="button">Cotiza aquí</Button>
        </div>
      </section>
    </div>
  </MainLayout>
);

export default SeguroSaludFlexible;