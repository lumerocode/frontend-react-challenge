import { Button } from '../components/ui/Button';
import { Checkbox } from '../components/ui/Checkbox';
import { Input } from '../components/ui/Input';
import { SelectInputGroup } from '../components/ui/SelectInputGroup';
import { MainLayout } from '../components/layout/MainLayout';
import { documentOptions } from '../utils/documents';
import { useSeguroSaludForm } from '../hooks/useSeguroSaludForm';
import rimacFamily from '../assets/img/rimac-family.png';

export const SeguroSaludFlexible = () => {
  const {
    documentType,
    documentNumber,
    phone,
    acceptedPrivacy,
    acceptedCommercial,
    errors,
    isSubmitting,
    handleDocumentTypeChange,
    handleDocumentNumberChange,
    handlePhoneChange,
    handlePrivacyChange,
    handleCommercialChange,
    handleSubmit,
  } = useSeguroSaludForm();

  return (
    <MainLayout>
      <div className="grid gap-10 pb-8 md:py-8 px-0 md:px-6">
        
        {/* Destkop */}
        <section className="hidden md:grid">
          <div className="md:grid rbr-rimac-grid gap-8">
            <div className="w-120 overflow-hidden rounded-3xl">
              <img
                src={rimacFamily}
                alt="Familia RIMAC"
                className="w-auto h-full object-cover"
              />
            </div>

            <div className="rbr-col-start-7 rbr-col-end-12 ml-8 mr-16">
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
                  selectProps={{
                    value: documentType,
                    onChange: (event) => handleDocumentTypeChange(event.target.value),
                  }}
                  inputProps={{
                    name: 'document',
                    type: 'text',
                    value: documentNumber,
                    onChange: (event) => handleDocumentNumberChange(event.target.value),
                  }}
                  error={errors.documentNumber}
                  className="w-full"
                />

                <Input
                  label="Celular"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => handlePhoneChange(event.target.value)}
                  error={errors.phone}
                />

                <div className='space-y-3'>
                  <Checkbox
                    label="Acepto la Política de Privacidad"
                    checked={acceptedPrivacy}
                    onChange={(event) => handlePrivacyChange(event.target.checked)}
                    error={errors.privacy}
                  />
                  <Checkbox
                    label="Acepto la Política Comunicaciones Comerciales"
                    checked={acceptedCommercial}
                    onChange={(event) => handleCommercialChange(event.target.checked)}
                    error={errors.commercial}
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
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-3 w-3 mb-1 animate-spin rounded-full border-3 border-white border-t-transparent" />
                      Cotiza aquí
                    </span>
                  ) : (
                    'Cotiza aquí'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section className="md:hidden">
          <div className="rbr-rimac-grid">
            <div className="rbr-rimac-grid rbr-mob-col-span-full items-center">
              <div className="rbr-mob-col-span-2">
                <span className="inline-flex items-center rounded bg-gradient-rimac px-3 pt-1 py-0.5 text-xs font-bold leading-4 tracking-md text-rimac-black">
                  Seguro Salud Flexible
                </span>
                <h1 className="mt-2 text-3xl leading-9 font-bold text-rimac-black">
                  Creado para ti y tu familia
                </h1>
              </div>

              <div className="rbr-mob-col-span-2 overflow-hidden rounded-[28px]">
                <img
                  src={rimacFamily}
                  alt="Familia RIMAC"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="rbr-mob-col-span-full my-2 h-px bg-rimac-border-hover" />

            <div className="rbr-mob-col-span-full space-y-4">
              <p className="text-sm font-semibold leading-5 text-rimac-black tracking-sm">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
              </p>

              <SelectInputGroup
                label="Documento"
                options={documentOptions}
                selectProps={{
                  value: documentType,
                  onChange: (event) => handleDocumentTypeChange(event.target.value),
                }}
                inputProps={{
                  name: 'document',
                  type: 'text',
                  value: documentNumber,
                  onChange: (event) => handleDocumentNumberChange(event.target.value),
                }}
                error={errors.documentNumber}
                className="w-full"
              />
              <Input
                label="Celular"
                name="phone"
                type="tel"
                value={phone}
                onChange={(event) => handlePhoneChange(event.target.value)}
                error={errors.phone}
              />
              <div className='space-y-4 mb-9 pt-2'>
                <Checkbox
                  label="Acepto la Política de Privacidad"
                  checked={acceptedPrivacy}
                  onChange={(event) => handlePrivacyChange(event.target.checked)}
                  error={errors.privacy}
                />
                <Checkbox
                  label="Acepto la Política Comunicaciones Comerciales"
                  checked={acceptedCommercial}
                  onChange={(event) => handleCommercialChange(event.target.checked)}
                  error={errors.commercial}
                />
                <p className="text-xs font-semibold text-rimac-dark underline">
                  Aplican Términos y Condiciones.
                </p>
              </div>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2 mb-1">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Cotiza aquí
                  </span>
                ) : (
                  'Cotiza aquí'
                )}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SeguroSaludFlexible;