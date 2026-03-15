import type { Metadata } from "next";
import { getDictionary, Locale, locales } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  return {
    title: `${dict.deleteAccount.title} - Docbase`,
    description: dict.deleteAccount.metaDescription,
  };
}

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  if (validLocale === "de") {
    return <DeleteAccountDE />;
  }

  return <DeleteAccountEN />;
}

function DeleteAccountEN() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Delete Your Account</h1>

      <div className="legal-content">
        <h2>What Happens When You Delete Your Account</h2>
        <p>
          When you request account deletion, the following data will be{" "}
          <strong>permanently deleted</strong> within 30 days:
        </p>
        <ul>
          <li>Your account credentials and profile information (email, display name, profile picture)</li>
          <li>All document metadata stored in our database (titles, categories, tags, OCR text)</li>
          <li>Subscription and usage data</li>
          <li>All app preferences and settings</li>
        </ul>

        <h2>What Is NOT Deleted</h2>
        <p>
          Documents stored in your personal Google Drive are <strong>not</strong>{" "}
          deleted by us, because Docbase uses the restricted{" "}
          <code>drive.file</code> scope and we do not have permission to delete
          files from your Google Drive after your account is removed. You can
          delete these files manually from your Google Drive at any time.
        </p>

        <h2>How to Delete Your Account</h2>

        <h3>Option 1: In the App</h3>
        <p>
          Open Docbase &rarr; Settings &rarr; Delete Account. This will
          immediately begin the deletion process.
        </p>

        <h3>Option 2: Via Email</h3>
        <p>
          If you no longer have access to the app, send an email to the address
          below with the subject line <strong>&quot;Account Deletion Request&quot;</strong>.
          Please include the email address associated with your Docbase account.
        </p>

        <div className="my-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <p className="text-lg font-semibold mb-2">Send your request to:</p>
          <a
            href="mailto:info@gzhn.online?subject=Account%20Deletion%20Request"
            className="text-blue-400 hover:text-blue-300 text-lg underline"
          >
            info@gzhn.online
          </a>
        </div>

        <h2>Processing Time</h2>
        <p>
          Account deletion requests are processed within <strong>30 days</strong>.
          You will receive a confirmation email once your data has been deleted.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have any questions about the deletion process, contact us at{" "}
          <a href="mailto:info@gzhn.online">info@gzhn.online</a>.
        </p>
      </div>
    </div>
  );
}

function DeleteAccountDE() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Konto l&ouml;schen</h1>

      <div className="legal-content">
        <h2>Was passiert, wenn Sie Ihr Konto l&ouml;schen</h2>
        <p>
          Wenn Sie die Kontol&ouml;schung beantragen, werden folgende Daten
          innerhalb von 30 Tagen <strong>unwiderruflich gel&ouml;scht</strong>:
        </p>
        <ul>
          <li>Ihre Kontodaten und Profilinformationen (E-Mail, Anzeigename, Profilbild)</li>
          <li>Alle in unserer Datenbank gespeicherten Dokument-Metadaten (Titel, Kategorien, Tags, OCR-Text)</li>
          <li>Abonnement- und Nutzungsdaten</li>
          <li>Alle App-Einstellungen und Pr&auml;ferenzen</li>
        </ul>

        <h2>Was NICHT gel&ouml;scht wird</h2>
        <p>
          Dokumente in Ihrem pers&ouml;nlichen Google Drive werden von uns{" "}
          <strong>nicht</strong> gel&ouml;scht, da Docbase den eingeschr&auml;nkten{" "}
          <code>drive.file</code> Scope verwendet und wir nach der
          Kontol&ouml;schung keine Berechtigung haben, Dateien aus Ihrem Google
          Drive zu entfernen. Sie k&ouml;nnen diese Dateien jederzeit manuell
          aus Ihrem Google Drive l&ouml;schen.
        </p>

        <h2>So l&ouml;schen Sie Ihr Konto</h2>

        <h3>Option 1: In der App</h3>
        <p>
          &Ouml;ffnen Sie Docbase &rarr; Einstellungen &rarr; Konto l&ouml;schen.
          Der L&ouml;schvorgang beginnt sofort.
        </p>

        <h3>Option 2: Per E-Mail</h3>
        <p>
          Falls Sie keinen Zugriff mehr auf die App haben, senden Sie eine E-Mail
          an die unten stehende Adresse mit dem Betreff{" "}
          <strong>&quot;Antrag auf Kontol&ouml;schung&quot;</strong>. Bitte geben
          Sie die E-Mail-Adresse an, die mit Ihrem Docbase-Konto verkn&uuml;pft ist.
        </p>

        <div className="my-8 p-6 rounded-xl border border-white/10 bg-white/5">
          <p className="text-lg font-semibold mb-2">Senden Sie Ihre Anfrage an:</p>
          <a
            href="mailto:info@gzhn.online?subject=Antrag%20auf%20Kontol%C3%B6schung"
            className="text-blue-400 hover:text-blue-300 text-lg underline"
          >
            info@gzhn.online
          </a>
        </div>

        <h2>Bearbeitungszeit</h2>
        <p>
          Antr&auml;ge auf Kontol&ouml;schung werden innerhalb von{" "}
          <strong>30 Tagen</strong> bearbeitet. Sie erhalten eine
          Best&auml;tigungs-E-Mail, sobald Ihre Daten gel&ouml;scht wurden.
        </p>

        <h2>Fragen?</h2>
        <p>
          Bei Fragen zum L&ouml;schvorgang kontaktieren Sie uns unter{" "}
          <a href="mailto:info@gzhn.online">info@gzhn.online</a>.
        </p>
      </div>
    </div>
  );
}
